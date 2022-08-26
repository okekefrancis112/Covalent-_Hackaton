import Link from 'next/link'
import React, { Fragment } from 'react'

const daos = [
    {
        name: "UNISWAP",
        description: "Uniswap is a Decentralized EXchange that generates automatic markets of liquidity asset pairs. It allows for flash transactions and liquidity allocation by specific price margins.",
        logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/uniswap.png",
        website: "https://uniswap.org/",
        twitter: "https://twitter.com/uniswap",
        telegram: null,
        discord: "https://discord.gg/FCfyBSbCU5",
        discourse: "https://gov.uniswap.org/",
        github: "https://github.com/Uniswap",
        g_token: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        ta: [
            { investors: 0.1780 },
            { community: 0.6 },
            { team: 0.2151 },
            { advisors: 0.0069 }
        ]
    },

    {
        name: "BitDAO",
        description: "Bootstrapped by ByBit DEX and a massive launch auction, BitDAO aims to build, grant and partner towards a cross-ownership network of crypto projects promoting DeFi governance, treasury management and education.",
        logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/bitdao.eth.png",
        website: "https://www.bitdao.io/",
        twitter: "https://twitter.com/BitDAO_Official",
        telegram: "https://t.me/BitDAO_Official",
        discord: "https://discord.com/invite/jTBC4BKnj7",
        discourse: "https://discourse.bitdao.io/",
        github: "https://github.com/BitDAOProtocol",
        g_token: "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5",
        ta: [
            { private_sale: 0.05 },
            { launch_partner_rewards: 0.05 },
            { bitdao_treasury: 0.3 },
            { bybit_flexible: 0.15 },
            { bybit_locked: 0.45 }
        ]
    },

    {
        name: "Gnosis",
        description: "The Gnosis DAO community leads Gnosis' strategy in building and promoting prediction-market tools and protocols for finance & governance. It is the producer of MUCH used Gnosis Safe.",
        logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/gnosis.jpeg",
        website: "https://gnosis.io/",
        twitter: "https://twitter.com/gnosisPM",
        telegram: null,
        discord: "https://discord.com/invite/M39dTHQ",
        discourse: "https://forum.gnosis.io/",
        github: "https://github.com/gnosis",
        g_token: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
        ta: [
            { sold: 0.9 },
            { retained_by_company: 0.1 }

        ]
    }
]
const Daolist = () => {


    return (
        <Fragment>
            <div className="list">

                <table style={{ width: '100%' }}>

                    <thead className="list-head">
                        <tr>
                            <th className=''>
                                S/N
                            </th>
                            <th>DAO</th>
                            <th>Address</th>

                        </tr>
                    </thead>

                    <tbody>
                        {daos.map((dao, index) => {
                            return (
                                <tr key={index}>

                                    <td className='number'>
                                        {index + 1}
                                    </td>
                                    <td className='list-body-container'>
                                        <Link href={`/${dao.g_token}?chainid=1`}>
                                            <a className=''>
                                                <img src={dao.logo} className="list-data-logo-img" style={{ marginRight: "10px" }} /> <span>{dao.name}</span>
                                            </a>
                                        </Link>
                                    </td>
                                    <td className=''>{dao.g_token}</td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>

            </div>
        </Fragment>
    )
}

export default Daolist