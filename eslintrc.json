import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "react/react-in-jsx-scope": "off", // no es necesario con React 17+
      "react/prop-types": "off"
    },
    ...pluginReact.configs.recommended
  }
]);
