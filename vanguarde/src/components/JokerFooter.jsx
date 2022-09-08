import React, {Component} from 'react';
import {MDBContainer, MDBFooter} from 'mdbreact';

export class JokerFooter extends Component {
    constructor(props) {
        super(props);

        this.footerClicks = 0;
        this.footerArray = [
            // The only serious footer content piece
            `© ${new Date().getFullYear()} Copyright Taburette`,
            // Irrational humour appearances
            'Шёл медведь по лесу, видит — машина горит. Сел в неё и сгорел.',
            'Надел мужик шляпу, а она ему как раз.',
            '\"Вы кто по знаку зодиака?\" \"Я рыба.\" \"А я — пиво!\"',
            'Плохие шутки кончились, а хороших не будет.',
        ];

        this.state = {
            footerText: this.footerArray[0],
        };

        this.handleFooterClick = this.handleFooterClick.bind(this);
    }

    handleFooterClick() {
        this.footerClicks += 1;
        if (this.footerClicks > 5) {
            const newFooterText = this.footerArray[
                (this.footerClicks - 5) % this.footerArray.length
            ];
            this.setState({footerText: newFooterText});
        }
    }

    render() {
        return (
            <MDBFooter color="elegant-color"
                className="font-small pt-4 mt-4"
                onClick={this.handleFooterClick}
                style={{
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    KhtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    MsUserSelect: 'none',
                    userSelect: 'none',
                }}>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid >
                        {this.state.footerText}
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}
