import { InvalidParamError } from 'core/error';

export function validateRGA(rga: string) {
  const rgaFormated = formatRGA(rga);
  if (rgaFormated.length !== 12 || isNaN(rgaFormated as any))
    throw new InvalidParamError('rga');
}

function formatRGA(rga: string): string {
  return rga.replace(/\.|-/g, '');
}
