# Conventions

- [Conventions](#conventions)
  - [File naming](#file-naming)
  - [Pull requests conventions](#pull-requests-conventions)
  - [Coding conventions](#coding-conventions)

## File naming

- `kebab-case` for any common files and catalogs: separate lower cased words with dashes
- `snake_case` for python modules: separate lower cased words with underscores
- `PascalCase` for JS resources like React components: each word in the construct is capitalized
- `camelCase`  for JS scripts: similar to the previous case, but the first character is preserved in
    lower case

Contributors are encouraged to use *authentic* names rather than bored `src`, `app`, etc. The 
enumeration of currently used terms resides in the [glossary](glossary.md).

## Pull requests conventions

- Minimum one approval is required to merge a PR
- Each constructive comment in the PR conversation must be resolved before merging
- Commits squashing is the preferred way to organize the merging process

## Code conventions

- [PEP 8](https://www.python.org/dev/peps/pep-0008/)
- 100 characters max per line
- Database naming
  - `PascalCase` for ORM-classes
  - `snake_case` for table names; entities are treated as singular nouns
