import React from "react";
import { Spring, animated } from "react-spring";
import styled from "styled-components";
import { bulb1, bulb2 } from "./data";

const data = [{ name: "bulb1", image: bulb1 }, { name: "bulb2", image: bulb2 }];

const Box = styled.div`
    width: 250px;
    height: 250px;
    background: white;
`;

class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    toggleSelected = () => {
        const { selected } = this.state;
        this.setState({
            selected: 1 - selected
        });
    };

    render() {
        const { selected } = this.state;
        const bulb = data[selected].image;
        return (
            <Box onClick={this.toggleSelected}>
                <svg viewBox="0 0 256 256">
                    {bulb.map((p, i) => (
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
