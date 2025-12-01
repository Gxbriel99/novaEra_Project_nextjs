import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,                
    schema: "http://91.98.195.174:8000/graphql",
    documents: "app/lib/graphql/**/*.ts",
    ignoreNoDocuments: true,
    generates: {
        "app/lib/codeGenType/graphql.ts": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",         
            },
            plugins: [
                "typescript",
                "typescript-operations"
            ],
        }
    }
};

export default config;
