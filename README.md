# apiconversão
# Para coverter metros para km 
 📘 API de Conversão de Unidades
 
 📌 Descrição

API para conversão de unidades de **comprimento, massa, área, temperatura e velocidade**.

---

 🌐 Base URL

```
http://localhost:3000
```

---

 📏 Comprimento (`/comprimento`)

| Rota                         | Método | Descrição                     |
| ---------------------------- | ------ | ----------------------------- |
| `/metros-para-km/:valor`     | GET    | Converte metros → quilômetros |
| `/metros-para-milhas/:valor` | GET    | Converte metros → milhas      |
| `/metros-para-pes/:valor`    | GET    | Converte metros → pés         |

---

 ⚖️ Massa (`/massa`)

| Rota                     | Método | Descrição            |
| ------------------------ | ------ | -------------------- |
| `/kg-para-gramas/:valor` | GET    | Converte kg → gramas |
| `/kg-para-libras/:valor` | GET    | Converte kg → libras |
| `/kg-para-oncas/:valor`  | GET    | Converte kg → onças  |

---

 📐 Área (`/area`)

| Rota                    | Método | Descrição           |
| ----------------------- | ------ | ------------------- |
| `/m2-para-km2/:valor`   | GET    | Converte m² → km²   |
| `/m2-para-acres/:valor` | GET    | Converte m² → acres |
| `/m2-para-pes2/:valor`  | GET    | Converte m² → pés²  |

---

 🌡️ Temperatura (`/temperatura`)

| Rota                              | Método | Descrição        |
| --------------------------------- | ------ | ---------------- |
| `/celsius-para-fahrenheit/:valor` | GET    | Converte °C → °F |
| `/celsius-para-kelvin/:valor`     | GET    | Converte °C → K  |
| `/fahrenheit-para-celsius/:valor` | GET    | Converte °F → °C |

---

🚀 Velocidade (`/velocidade`)

| Rota                   | Método | Descrição           |
| ---------------------- | ------ | ------------------- |
| `/kmh-para-ms/:valor`  | GET    | Converte km/h → m/s |
| `/kmh-para-mph/:valor` | GET    | Converte km/h → mph |
| `/nos-para-kmh/:valor` | GET    | Converte nós → km/h |

---

 🔄 Padrão de Resposta

Todas as rotas retornam um JSON padronizado:

📤 Exemplo de resposta:

```json
{
  "valor_original": 1000,
  "unidade_origem": "metros",
  "valor_convertido": 1,
  "unidade_destino": "quilômetros"
}
```

---

📊 Estrutura da Resposta

| Campo            | Tipo   | Descrição                  |
| ---------------- | ------ | -------------------------- |
| valor_original   | number | Valor enviado pelo usuário |
| unidade_origem   | string | Unidade de entrada         |
| valor_convertido | number | Resultado da conversão     |
| unidade_destino  | string | Unidade final              |

---

⚠️ Erros

Se o valor não for numérico:

```json
{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}
```

---

 ✅ Exemplo de Requisição

```
GET /comprimento/metros-para-km/1000
```

Resposta:

```json
{
  "valor_original": 1000,
  "unidade_origem": "metros",
  "valor_convertido": 1,
  "unidade_destino": "quilômetros"
}
```

---
