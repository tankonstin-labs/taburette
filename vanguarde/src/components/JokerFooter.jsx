import React, {Component} from 'react';
import {MDBContainer, MDBFooter} from 'mdb-react-ui-kit';

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
            'Нажимаю "Мой Компьютер", а он не моет.',
            'Колобок повесился.',
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
            <MDBFooter
                className="font-small pt-1 bg-dark bg-gradient text-light"
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
                    <MDBContainer fluid>
                        {this.state.footerText}
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}
