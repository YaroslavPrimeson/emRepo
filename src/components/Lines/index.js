import React from 'react';
import Media from 'react-media'


const Index = () => {
    return (
        <Media queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px) and (max-width: 1023px)",
            large: "(min-width: 1024px)"
        }}>
            {matches => (
                <>
                    {!matches.small && <div className="lines">
                        <div className="lines-n"></div>
                        <div className="lines-n"></div>
                        <div className="lines-n"></div>
                        <div className="lines-n"></div>
                        <div className="lines-n"></div>
                    </div>}
                </>)}
        </Media>
    );
};

export default Index;