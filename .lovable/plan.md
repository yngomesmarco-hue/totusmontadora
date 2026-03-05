

## Plano: Criar evento SBC Summit Rio 2026 no Portfolio

### O que sera feito

1. **Copiar as 7 imagens** enviadas para `src/assets/sbc2026/image-1.jpg` ate `image-7.jpg`

2. **Criar a pagina `src/pages/SBCSummitRio2026.tsx`** seguindo o mesmo padrao das paginas existentes (SigmaAmericas2025, etc.) -- Header, titulo "SBC Summit Rio 2026", grid de galeria com as 7 fotos, Footer

3. **Adicionar rota** em `src/App.tsx`: `/portfolio/sbc-summit-rio-2026`

4. **Adicionar o projeto no Portfolio** (`src/pages/Portfolio.tsx`):
   - Usar a primeira imagem como capa do card
   - Link para `/portfolio/sbc-summit-rio-2026`
   - Chave de traducao `portfolio.sbc2026`

5. **Adicionar traducoes** em `src/contexts/LanguageContext.tsx` para os 3 idiomas:
   - PT: `'portfolio.sbc2026': 'SBC SUMMIT RIO 2026'`
   - EN: `'portfolio.sbc2026': 'SBC SUMMIT RIO 2026'`
   - ES: `'portfolio.sbc2026': 'SBC SUMMIT RIO 2026'`

6. **Adicionar no dropdown do Header** (`src/components/Header.tsx`) um novo item "SBC Summit Rio 2026" no menu de navegacao do portfolio

### Arquivos afetados
- `src/assets/sbc2026/` (7 imagens novas)
- `src/pages/SBCSummitRio2026.tsx` (novo)
- `src/App.tsx` (nova rota)
- `src/pages/Portfolio.tsx` (novo card)
- `src/contexts/LanguageContext.tsx` (traducoes)
- `src/components/Header.tsx` (dropdown)

