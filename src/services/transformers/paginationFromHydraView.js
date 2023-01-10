export default function paginationFromHydraView(view) {
  const current = view['@id'].slice(-1);
  const first = view['hydra:first'].slice(-1);
  const last = view['hydra:last'].slice(-1);
  const next = view['hydra:next'] !== undefined ? view['hydra:next'].slice(-1) : undefined;
  let previous = undefined;

  if (view['hydra:previous'] !== undefined) {
    previous = view['hydra:previous'].slice(-1);
  }

  return {
    current,
    first,
    last,
    previous,
    next,
  };
}