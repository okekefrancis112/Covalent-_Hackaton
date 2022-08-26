import {useState} from "react"

const PopModal = ({blockchainData, offPopModal, report}) => {
    const [mod, setMod] = useState("");


    const handler = (x, y) => {
        report(x, y);
        offPopModal();
    }
    
    return (
        <div className="pop__modal__container">
         <div className="pop__modal">
            {
                blockchainData ? (
                    <>
                        {
                            blockchainData.map((blk, index) => {
                                console.log(blk);
                                return (
                                    <div className="pop__modal__cta" key={index} onClick={() => {handler(blk.label, blk.chain_id)}}>
                                        <img src={blk.logo_url} alt="" />
                                        <p>{blk.label}</p>
                                    </div>
                                )
                            })
                        }
                    </>
                ) : (
                    <div className="pop__modal__loading">
                        <p>Supported Blockchain Data Is Loading</p>
                    </div>
                )
            }
         </div>
        </div>
    )
}

export default PopModal;