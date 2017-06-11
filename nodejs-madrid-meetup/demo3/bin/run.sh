rm -r -f coverage .nyc_output private
tsc -p tsconfig.json -inlineSourceMap -outDir private
node --inspect private/src/index.js
