const path = require('path')
const fs = require('fs')

module.exports = {
  'pascal-case-component-names': {
    meta: {
      type: 'suggestion',
      docs: {
        description:
          'Enforce component file names to start with a capital letter and end with .tsx',
        category: 'Best Practices',
        recommended: true,
      },
      schema: [],
    },
    create(context) {
      return {
        Program(node) {
          const fileName = context.getFilename()
          const ext = path.extname(fileName)
          if (ext !== '.tsx' || fileName.includes('\\pages\\')) return
          const basename = path.basename(fileName)
          if (basename.charAt(0) !== basename.charAt(0).toUpperCase()) {
            context.report({
              node,
              message: `Component file name does not match the pattern: ${basename}`,
            })
          }
        },
      }
    },
  },
  'ui-component-file-name-start-with-ui': {
    meta: {
      type: 'suggestion',
      docs: {
        description:
          'Enforce component file names to start with UI_ extension.',
        category: 'Best Practices',
        recommended: true,
      },
      schema: [],
    },
    create(context) {
      const dirPath = path.resolve('./src/ui-components')
      const fileNames = new Set()

      function getTsxFiles(dirPath) {
        const files = fs.readdirSync(dirPath)

        files.forEach((file) => {
          const filePath = path.join(dirPath, file)
          const stat = fs.statSync(filePath)
          const ext = path.extname(file)

          if (stat.isDirectory()) {
            getTsxFiles(filePath)
          } else if (ext === '.tsx' || ext === '.ts') {
            const fileName = path.basename(file, ext)

            if (!fileName.startsWith('UI_')) {
              fileNames.add(fileName)
            }
          }
        })
      }

      getTsxFiles(dirPath)

      return {
        Program() {
          const filePath = context.getFilename()
          const ext = path.extname(filePath)

          if (ext === '.tsx' || ext === '.ts') {
            const fileName = path.basename(filePath, ext)
            if (
              !fileName.startsWith('UI_') &&
              fileNames.has(fileName) &&
              !fileName.endsWith('.helper') &&
              !fileName.endsWith('.style') &&
              filePath.includes('ui-components') &&
              !filePath.includes('ui-components\\index.ts')
            ) {
              const node = context.getSourceCode().ast
              context.report({
                node,
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 1, column: 0 },
                },
                message: `Component file name does not match the pattern: ${fileName}`,
                filePath,
              })
            }
          }
        },
      }
    },
  },
  'ui-component-name-start-with-ui': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'disallow component names without "UI_" suffix',
        category: 'Best Practices',
        recommended: false,
      },
      fixable: 'code',
      schema: [], // no options
    },

    create(context) {
      return {
        FunctionDeclaration(node) {
          const componentName = node.id.name
          const filePath = context.getFilename()

          if (
            filePath.includes('src\\ui-components') &&
            !filePath.includes('.helper.') &&
            !componentName.startsWith('UI_') &&
            filePath.endsWith('.tsx')
          ) {
            context.report({
              node,
              message: 'Component names should start with "UI_".',
              loc: node.id.loc,
              fix: (fixer) => {
                const fixedComponentName = `UI_${componentName}`
                const sourceCode = context.getSourceCode()
                const start = sourceCode.getIndexFromLoc(node.id.loc.start)
                const end = sourceCode.getIndexFromLoc(node.id.loc.end)
                const range = [start, end]
                return fixer.replaceTextRange(range, fixedComponentName)
              },
            })
          }
        },
      }
    },
  },
  'component-name-end-with-comp': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'disallow component names without "_comp" suffix',
        category: 'Best Practices',
        recommended: false,
      },
      fixable: 'code',
      schema: [], // no options
    },

    create(context) {
      return {
        FunctionDeclaration(node) {
          const componentName = node.id.name
          const filePath = context.getFilename()

          if (
            filePath.includes('src\\components') &&
            !componentName.endsWith('_comp') &&
            !componentName.startsWith('use') &&
            filePath.endsWith('.tsx')
          ) {
            context.report({
              node,
              message: 'Component names should end with "_comp".',
              loc: node.id.loc,
              fix: (fixer) => {
                const fixedComponentName = `${componentName}_comp`
                const sourceCode = context.getSourceCode()
                const start = sourceCode.getIndexFromLoc(node.id.loc.start)
                const end = sourceCode.getIndexFromLoc(node.id.loc.end)
                const range = [start, end]
                return fixer.replaceTextRange(range, fixedComponentName)
              },
            })
          }
        },
      }
    },
  },
  'containers-component-name-end-with-page': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'disallow container names without "_page" suffix',
        category: 'Best Practices',
        recommended: false,
      },
      fixable: 'code',
      schema: [], // no options
    },

    create(context) {
      return {
        FunctionDeclaration(node) {
          const componentName = node.id.name
          const filePath = context.getFilename()

          if (
            filePath.includes('src\\containers') &&
            !componentName.endsWith('_page') &&
            !filePath.includes('.helper.') &&
            filePath.endsWith('.tsx')
          ) {
            context.report({
              node,
              message: 'Component names should end with "_page".',
              loc: node.id.loc,
              fix: (fixer) => {
                const fixedComponentName = `${componentName}_page`
                const sourceCode = context.getSourceCode()
                const start = sourceCode.getIndexFromLoc(node.id.loc.start)
                const end = sourceCode.getIndexFromLoc(node.id.loc.end)
                const range = [start, end]
                return fixer.replaceTextRange(range, fixedComponentName)
              },
            })
          }
        },
      }
    },
  },
}
