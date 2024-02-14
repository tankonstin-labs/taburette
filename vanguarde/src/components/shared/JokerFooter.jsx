import React, { useState } from 'react';
import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';

export function JokerFooter(props) {

    const footerArray = [
        // The only serious footer content piece
        `© ${new Date().getFullYear()} Copyright Taburette`,
        // Irrational humour appearances
        'Шёл медведь по лесу, видит — машина горит. Сел в неё и сгорел.',
        'Надел мужик шляпу, а она ему как раз.',
        'Нажимаю "Мой Компьютер", а он не моет.',
        'Колобок повесился.',
        'Плохие шутки кончились, а хороших не будет.',
    ];

    const [footerClicks, setFooterClicks] = useState(0);
    const [footerText, setFooterText] = useState(footerArray[0]);

    const handleFooterClick = () => {

        setFooterClicks(footerClicks + 1);
        if (footerClicks > 5) {
            const newFooterText = footerArray[(footerClicks - 5) % footerArray.length];
            setFooterText(newFooterText);
        }
    };

    return (
        <MDBFooter
            className="font-small pt-1 bg-dark bg-gradient text-light"
            onClick={ handleFooterClick }
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
                    { footerText }
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}
