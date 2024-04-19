
import React from "react";
import { useRef, useState } from "react"
const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className=" space-y-3 mt-5 overflow-hidden "
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h6 className="cursor-pointer pb-2  flex items-center justify-between text-sm font-semibold text-text-green">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h6>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}>
                <div>
                    <p className=" -mt-2  font-thin">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Comment puis-je m'inscrire sur agroconnect en tant que producteur, transformateur, distributeur ou consommateur ?",
            a: "Pour vous inscrire sur agroconnect, il vous suffit de visiter notre site web et de suivre les instructions d'inscription appropriées pour votre type de profil. une fois inscrit, vous pourrez commencer à profiter des nombreux avantages qu'offre notre plateforme."
        },
        {
            q: "Quels avantages agroconnect offre-t-il aux consommateurs ?",
            a: "Pour les consommateurs, agroconnect offre la possibilité de découvrir et d'acheter des produits agricoles locaux et de saison directement auprès des producteurs ou via des canaux de distribution alternatifs. cela favorise une consommation plus responsable et soutient les producteurs locaux."
        },
        {
            q: "Comment les distributeurs peuvent-ils bénéficier d'agroconnect ?",
            a: "Agroconnect permet aux distributeurs de trouver des fournisseurs pour répondre à la demande des consommateurs. en optimisant les flux logistiques et en réduisant les coûts liés à l'approvisionnement, agroconnect contribue à améliorer l'efficacité des opérations des distributeurs."
        },
        {
            q: "Qu'est-ce qu'agroconnect ?",
            a: "Agroconnect est une plateforme en ligne innovante qui vise à connecter tous les acteurs de la chaîne de valeur agricole. cela inclut les producteurs, les transformateurs, les distributeurs et même les consommateurs."
        },
        {
            q: "Quel est l'objectif principal d'agroconnect ?",
            a: "L'objectif principal d'agroconnect est de faciliter les échanges commerciaux entre les différents acteurs de l'industrie agricole. cela se fait en permettant aux producteurs de proposer leurs produits, aux transformateurs de trouver des matières premières de qualité, aux distributeurs de répondre à la demande du marché et aux consommateurs de découvrir et d'acheter des produits locaux et de saison."
        },
        {
            q: "En quoi agroconnect est-il utile pour les transformateurs ?",
            a: "Pour les transformateurs, agroconnect offre la possibilité de rechercher des matières premières de haute qualité auprès de producteurs fiables. cela facilite l'approvisionnement en matières premières et aide à planifier la production de manière efficace."
        }
    ]
  
    return (
        <section className="border  mb-10 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center mb-15">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    FAQ
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-1xl">
                Votre guide complet pour comprendre comment notre plateforme en ligne révolutionne la chaîne de valeur agricole
                </p>
            </div>
            <div className="mt-5 border  font-thin  max-w-3xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}