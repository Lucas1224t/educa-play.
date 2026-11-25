# Educa Play no Render

## Publicação
1. Envie todo o conteúdo desta pasta para um repositório GitHub privado ou público. Não envie o arquivo `.env`.
2. No Render, crie um **Web Service** conectado ao repositório.
3. Root Directory: deixe em branco. Build Command: `npm install`. Start Command: `npm start`.
4. Escolha o plano Free.
5. Em Environment, adicione `MONGODB_URI`, `MONGODB_DB` (ex.: `educaplay`) e `JWT_SECRET` (chave aleatória longa, com pelo menos 32 caracteres).
6. Faça deploy.

O frontend e a API são servidos pelo mesmo serviço; as chamadas `/api/...` são encaminhadas ao backend. O banco MongoDB Atlas continua sendo externo e precisa estar acessível pela rede do Render.

Nunca compartilhe `MONGODB_URI` ou `JWT_SECRET`. O primeiro cadastro de professor cria a conta inicial; alunos são cadastrados pelo professor após criar uma turma.
