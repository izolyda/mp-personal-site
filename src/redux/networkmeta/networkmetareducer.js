
const INITIAL_STATE = {
    network_options: [{name: 'universe', value: 'universe_generator'},
                        {name: 'background', value: 'backgrounds_generator'}],
    noise_options: ['none', 'random', 'const'],
    trunc_min_max: [0, 1],
    seed_min_max: [0, 65536],
};

const networkmetaReducer = (state=INITIAL_STATE) => {

            return state;
}

export default networkmetaReducer;