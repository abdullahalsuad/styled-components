import nerdImage from '../ass/img/illustration.png';
import Button from './Button';
import Image from './Image';
import {Tag} from './styles/Element.styled'
import {CardContainer, ContenContainer} from './styles/container.styles'
export default function Card() {
    return (
        <CardContainer>
            <ContenContainer>
                <Tag >EXCLUSIVE</Tag>
                <h1>React Styled Components</h1>
                <p>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </p>
                <div>
                    <Button link="#" text="Watch now" />
                    <Button link="#" text="Github repo" />
                </div>
            </ContenContainer>
            <Image imgSrc={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}