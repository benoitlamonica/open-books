export function makeBudget(siret, year, records) {
  const length = records.length;

  if (length === 0) return null;

  const debit = records.reduce((sum, { sd }) => sum + sd, 0);
  const credit = records.reduce((sum, { sc }) => sum + sc, 0);
  const labels = [
    ...new Set(records.map(record => record.lbudg.toLowerCase())),
  ];
  const nomens = [...new Set(records.map(record => record.nomen))];

  if (labels.length > 1) {
    console.log('More than 1 label for', siret, year);
  }
  if (nomens.length > 1) {
    console.log('More than 1 nomen for', siret, year);
  }

  const label = labels.length > 0 ? labels[0] : '';
  const nomen = nomens.length > 0 ? nomens[0] : '';

  return {
    siret,
    year,
    nomen,
    length,
    debit,
    credit,
    label,
    records,
  };
}
