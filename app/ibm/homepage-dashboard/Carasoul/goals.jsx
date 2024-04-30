import React from 'react'
import {PrevButton, NextButton, usePrevNextButtons} from './button'
import useEmblaCarousel from 'embla-carousel-react'
import {MaterialSymbol} from 'react-material-symbols';

const EmblaCarousel = (props) => {
    const {slides, options} = props
    const icons = [ < MaterialSymbol key={1} icon = "Attach_money" size = {
            60
        }
        weight = {
            500
        }
        color = '#0f62fe' />, < MaterialSymbol key={2} icon = "Discover_tune" size = {
            60
        }
        weight = {
            500
        }
        color = '#0f62fe' />, < MaterialSymbol key={3} icon = "Step_over" size = {
            60
        }
        weight = {
            500
        }
        color = '#0f62fe' />, < MaterialSymbol key={4} icon = "Draw_abstract" size = {
            60
        }
        weight = {
            500
        }
        color = '#0f62fe' />
    ]
    const goals = ["Define areas of oppurtunity", "Uncover functional issues", "Bypass Reskinning mentality", "Create the design principles"]
    const [emblaRef,
        emblaApi] = useEmblaCarousel(options)

    const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi)
    return (
        <section className="embla w-[1000px]">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide " key={index}>
                            <div className="embla__slide__number bg-[#f4f4f4]">
                                {icons[index]}

                                <p className="goals-card text-ibm-blue">{goals[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel