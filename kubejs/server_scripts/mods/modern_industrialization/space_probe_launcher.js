ServerEvents.recipes(e => {
    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kjs = (id) => `kubejs:${id}`;
    let st = (id) => `statech:modern_industrialization/space_probe_launcher/${id}`;

    let spl = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('space_probe_launcher'),
            eu: eu,
            duration: duration,
            id: id,
            process_conditions: [{'biome': 'ad_astra:orbit', 'id': 'modern_industrialization:biome'} ]
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    spl(
        st('space_probe'),
        128,
        6000,
        [ { amount: 1, item: kjs('space_probe') } ],
        [ 
            { amount: 64, item: astra('moon_desh_ore') },
            { amount: 64, item: astra('mars_ostrum_ore') },
            { amount: 64, item: astra('venus_calorite_ore') },
            { amount: 64, item: astra('deepslate_ice_shard_ore') },
            { amount: 64, item: astra('moon_cheese_ore') },
            { amount: 64, item: astra('moon_sand') },
            { amount: 64, item: astra('moon_stone') },
            { amount: 64, item: astra('mars_sand') },
            { amount: 64, item: astra('mars_stone') },
            { amount: 64, item: astra('venus_sand') },
            { amount: 64, item: astra('venus_stone') },
            { amount: 64, item: astra('mercury_stone') },
            { amount: 64, item: astra('infernal_spire_block') }
        ]
    );
});