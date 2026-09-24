# Conventional Commits

Este repositório segue a especificação **Conventional Commits 1.0.0**:
https://www.conventionalcommits.org/en/v1.0.0/

## Formato

```
<type>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

## Exemplos

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

```
feat!: send an email to the customer when a product is shipped
```

```
feat(api)!: send an email to the customer when a product is shipped
```

```
docs: correct spelling of CHANGELOG
```

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Tipos

| Tipo       | Significado                                                              | Bump SemVer |
| ---------- | ------------------------------------------------------------------------ | ----------- |
| `fix`      | Corrige um bug no código                                                | `PATCH`     |
| `feat`     | Adiciona uma nova funcionalidade                                        | `MINOR`     |
| `BREAKING CHANGE` | Mudança que quebra compatibilidade (via rodapé ou `!`)          | `MAJOR`     |
| `build`    | Mudanças no build ou dependências externas                              | -           |
| `chore`    | Tarefas de manutenção sem impacto em produção                           | -           |
| `ci`       | Alterações em configurações de CI e scripts de build                    | -           |
| `docs`     | Alterações apenas em documentação                                       | -           |
| `style`    | Mudanças que não afetam o significado do código (formatação, etc.)      | -           |
| `refactor` | Alteração de código que não corrige bug nem adiciona funcionalidade     | -           |
| `perf`     | Melhoria de performance                                                 | -           |
| `test`     | Adição ou correção de testes                                            | -           |

Outros tipos são permitidos. Tipos além de `feat`/`fix` não afetam a versão SemVer, exceto quando há `BREAKING CHANGE`.

## Regras principais

- Commits **DEVEM** começar com um tipo: `feat`, `fix`, etc.
- `fix` **DEVE** ser usado para correção de bug; `feat` **DEVE** ser usado para nova funcionalidade.
- Escopo opcional entre parênteses após o tipo, ex.: `feat(parser): add ability to parse arrays`.
- A descrição **DEVE** vir após `: ` (dois-pontos + espaço).
- O corpo, se houver, **DEVE** começar uma linha em branco após a descrição.
- Rodapés, se houver, vêm após uma linha em branco do corpo, no formato `Token: valor` (ou `Token #valor`).
- `BREAKING CHANGE` **DEVE** ter `:` + espaço + descrição no rodapé, ou usar `!` antes dos dois-pontos do tipo.
- Toda mudança que quebra compatibilidade **DEVE** ser indicada no prefixo (`!`) ou no rodapé (`BREAKING CHANGE:`).
- O token no rodapé usa `-` no lugar de espaços, ex.: `Acked-by`. Exceção: `BREAKING CHANGE`.
- Tipos podem ser usados em qualquer caixa (recomenda-se consistência), exceto `BREAKING CHANGE`, que **DEVE** ser maiúsculo.

## Revert

Para reverter código, use o tipo `revert` com um rodapé referenciando os SHAs:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## Referência completa

https://www.conventionalcommits.org/en/v1.0.0/