import React, {Component} from 'react';
import Box from "../Components/Box/Box";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="section section-contact">
                    <form action="https://formspree.io/matilde.enevoldsen19@gmail.com" method="post">
                        <Box>

                        </Box>
                    </form>
                </section>
            </div>
        );
    }
}