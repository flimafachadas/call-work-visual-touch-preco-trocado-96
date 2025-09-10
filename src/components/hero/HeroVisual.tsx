
import { memo } from "react";

// Este componente não é mais necessário no novo layout, 
// mas mantemos para evitar erros de import
const HeroVisual = memo(() => {
  return null;
});

HeroVisual.displayName = "HeroVisual";

export default HeroVisual;
