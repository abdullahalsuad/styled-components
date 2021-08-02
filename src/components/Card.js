import nerdImage from '../ass/img/illustration.png';
import Button from './Button';
import {Tag,H1,P,Image} from './styles/Element.styled'
import {CardContainer, ContentContainer,ButtonContainer} from './styles/container.styles'
export default function Card() {
    return (
        <CardContainer>
            <ContentContainer><></>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="#" text="Watch now" />
                    <Button link="#" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer> 
    );
}