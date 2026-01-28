import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { yaml } from '@codemirror/lang-yaml';
import { linter, lintGutter } from '@codemirror/lint';
import YAML from 'js-yaml';
import Ajv from 'ajv';

const schema = {
  type: 'object',
  required: ['title', 'description', 'copyright', 'authors'],
  additionalProperties: false,
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    copyright: { type: 'string' },
    keywords: {
      type: 'array',
      items: { type: 'string' },
    },
    authors: {
      type: 'array',
      items: {
        type: 'object',
        required: ['family_name', 'given_name'],
        additionalProperties: false,
        properties: {
          family_name: { type: 'string' },
          given_name: { type: 'string' },
          affiliation: { type: 'string' },
          orcid: {
            type: 'string',
            pattern: '^\\d{4}-\\d{4}-\\d{4}-\\d{4}$',
          },
        },
      },
    },
  },
};

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

function NMRiumYamlEditor() {
  const [yamlContent, setYamlContent] =
    useState(`title: NMR spectra dataset generated with NMRium CLI
description: |-
  <p>This is a dataset generated with NMRium CLI.</p>
  <p>The dataset will be visible and accessible in <strong>NMRium</strong>, providing an <strong>interactive</strong> viewing experience for NMR spectra analysis.</p>
  <p>This represents the <strong>ultimate FAIR data submission</strong> — ensuring that your data is Findable, Accessible, Interoperable, and Reusable.</p>
copyright: cc-by-4.0
keywords:
  - NMR spectra
  - FAIR data
  - Nuclear Magnetic Resonance
authors:
  - family_name: 'Zasso'
    given_name: 'Michaël'
    affiliation: 'Zakodium Sàrl, Switzerland'
    orcid: '0000-0001-5295-2159'
  - family_name: 'Bolaños'
    given_name: 'Alejandro'
    affiliation: 'Universidad del Valle, Cali, Colombia'
    orcid: '0000-0001-5933-5524'
`);

  const yamlLinter = useCallback((view) => {
    const content = view.state.doc.toString();
    try {
      const data = YAML.load(content);
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return [
          {
            from: 0,
            to: content.length,
            severity: 'error',
            message: 'Root value must be a YAML mapping (object).',
          },
        ];
      }

      const isValid = validate(data);
      if (isValid) {
        return []; // No errors
      }

      const message = (validate.errors || [])
        .map((err) => {
          const path = err.instancePath || '/';
          return `${path} ${err.message}`.trim();
        })
        .join('\n');

      return [
        {
          from: 0,
          to: content.length,
          severity: 'error',
          message: message || 'Schema validation failed.',
        },
      ];
    } catch (error) {
      const diagnostics = [
        {
          from: 0,
          to: content.length,
          severity: 'error',
          message: error?.message || 'Invalid YAML',
        },
      ];
      return diagnostics;
    }
  }, []);

  const extensions = [
    yaml(),
    lintGutter(),
    linter(yamlLinter, { delay: 500 }), // Lint after 500ms debounce
  ];

  const onChange = useCallback((value) => {
    setYamlContent(value); // Just update state, no console.log or callbacks
  }, []);

  return (
    <div style={{ height: '600px', padding: '20px' }}>
      <h3>NMRium CLI YAML Editor (with Error Highlighting)</h3>
      <CodeMirror
        value={yamlContent}
        height="100%"
        extensions={extensions}
        onChange={onChange}
        theme="light"
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
        }}
      />
    </div>
  );
}

export default NMRiumYamlEditor;
