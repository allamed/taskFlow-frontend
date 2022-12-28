export const mapData = (tasks) => {
  const cards = tasks.map(
    ({
      id,
      debut,
      deadLine,
      etat,
      projet,
      titre,
      avancement,
      commentaires,
    }) => {
      return {
        id: `${id}`,
        title: titre,
        description: 'Can AI make memes',
        label: `deadLine = ${deadLine}`,
        draggable: true,
        debut,
        projet,
        avancement,
        commentaires,
        etat,
      };
    }
  );

  const enAttente = cards.filter((card) => card.etat == 'En_ATTENTE');
  const enCours = cards.filter((card) => card.etat == 'EN_COURS');
  const attenteValidation = cards.filter(
    (card) => card.etat == 'ATTENTE_VALIDATION'
  );
  const validee = cards.filter((card) => card.etat == 'VALIDEE');

  const taskData = {
    lanes: [
      {
        id: '1',
        title: 'En attente',
        label: `${enAttente.length} taches`,
        cards: enAttente,
      },
      {
        id: '2',
        title: 'En cours',
        label: `${enCours.length} taches`,
        cards: enCours,
      },
      {
        id: '3',
        title: 'attente validation',
        label: `${attenteValidation.length} taches`,
        cards: attenteValidation,
      },
      {
        id: '4',
        title: 'achevées',
        label: `${validee.length} taches`,
        cards: validee,
      },
    ],
  };
  return taskData;
};
