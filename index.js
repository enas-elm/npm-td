const fetch = require('node-fetch')


async function getAPI() {
    // change the rows parameter to get more or lesse value
    return await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&facet=region&rows=50')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de requête ' + response.status);
            }
            return response.json();
        })

        .then(data => {
            const festivalsInfo = data.records.map(festival => {
                return {
                    type: festival.fields.complement_domaine,
                    start_date: festival.fields.date_debut_ancien,
                    end_date: festival.fields.date_de_fin_ancien,
                    city: festival.fields.libelle_commune_pour_calcul_cp_insee,
                };
            });

            return festivalsInfo;
        })

        .catch(error => {
            console.error('Erreur:', error);
        });
}

module.exports = getAPI;