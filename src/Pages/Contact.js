import React, {Component} from 'react';
import Box from "../Components/Box/Box";
import Input from "../Components/Input/Input";
import Textarea from "../Components/Textarea/Textarea";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="section section-contact">
                    <form action="https://formspree.io/matilde.enevoldsen19@gmail.com" method="post">
                        <Box>
                            <h1>Contact</h1>
                            <Input
                                title="Name"
                                name="name"
                            />
                            <Input
                                title="Subject"
                                name="_subject"
                            />
                            <Input
                                title="E-mail"
                                name="_replyto"
                            />
                            <Textarea
                                title="Content"
                                name="content"
                            />

                            <button className="btn">Submit</button>
                        </Box>
                    </form>
                </section>
            </div>
        );
    }
}