const fetch = require('node-fetch')


async function getAPI() {
    return await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&facet=region')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de requête ' + response.status);
            }
            return response.json();
        })


        // .then(data => {
        //     const ids = [];
        //     data.records.forEach(festival => {
        //         ids.push(festival.recordid);
        //     });
        //     console.log(ids); 
        //     return ids;
        // })


        .then(data => {
            const ids = data.records.map(festival => {
                return {
                    start_date: festival.fields.date_debut_ancien,
                    end_date: festival.fields.date_de_fin_ancien,
                    type: festival.fields.complement_domaine,
                    city: festival.fields.libelle_commune_pour_calcul_cp_insee,
                };
            });

            return ids;
        })


        .catch(error => {
            console.error('Erreur:', error);
        });
}

module.exports = getAPI;