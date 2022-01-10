import React from 'react';
import './Section.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProductCard({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
    >
    <div className='section-container'>
        <div
        className='row home__hero-row'
        style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
        }}
        >
            <div className="center-sections">
                <div className='col'>
                    <div className='home__hero-text-wrapper'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>
                            {headline}
                        </h1>
                        <p
                            className={
                            lightTextDesc
                                ? 'home__hero-subtitle'
                                : 'home__hero-subtitle_dark'
                            }
                        >
                            {description}
                        </p>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                            {buttonLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
                </div>
            <div className="center-sections">
                <div className='col'>
                    <div className='home__hero-img-wrapper'>
                    <img src={img} alt={alt} className='home__hero-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default ProductCard;