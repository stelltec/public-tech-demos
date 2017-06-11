rm -r -f coverage .nyc_output private
nyc -r=text -r=html -i ts-node/register -e .ts mocha -t 5000 -r ts-node/register -r reflect-metadata/Reflect tests/**/*.test.ts