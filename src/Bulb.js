import React from "react";
import { Spring, animated } from "react-spring";
import styled from "styled-components";
import { bulbasaur, ivysaur, venusaur } from "./data";

const data = [
    { name: "Bulbasaur", image: bulbasaur },
    { name: "Ivysaur", image: ivysaur },
    { name: "Venusaur", image: venusaur }
];

const Box = styled.div`
    width: 50%;
    height: 50%;
    background: black;
`;

class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    evolve = () => {
        const { selected } = this.state;
        this.setState({
            selected: (selected + 1) % 3
        });
    };

    render() {
        const { selected } = this.state;
        const pokemon = data[selected];
        return (
            <Box onClick={this.evolve}>
                <svg viewBox="0 0 250 250">
                    {pokemon.image.map((p, i) => (
                        <Spring key={i} native to={p}>
                            {styles => (
                                <animated.path
                                    d={styles.d}
                                    fill={styles.fill}
                                />
                            )}
                        </Spring>
                    ))}
                </svg>
            </Box>
        );
    }
}

export default Bulb;
