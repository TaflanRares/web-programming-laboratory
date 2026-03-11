import { useEffect, useState } from 'react';
import ClickerItems from './ClickerItems.jsx';

const BASE_CLICK_POWER_COST = 10;
const CLICK_POWER_COST_GROWTH = 1.5;
const BASE_PASSIVE_COST = 25;
const PASSIVE_COST_GROWTH = 1.8;
const PASSIVE_CLICKS_PER_GATHERER = 1;

function Clicker() {
    const [clicks, setClicks] = useState(0);
    const [clicksPerClick, setClicksPerClick] = useState(1);
    const [clickPowerUpgradesBought, setClickPowerUpgradesBought] = useState(0);
    const [passiveGatherersBought, setPassiveGatherersBought] = useState(0);

    const clickPowerUpgradeCost = Math.floor(
        BASE_CLICK_POWER_COST * Math.pow(CLICK_POWER_COST_GROWTH, clickPowerUpgradesBought)
    );
    const passiveGathererCost = Math.floor(
        BASE_PASSIVE_COST * Math.pow(PASSIVE_COST_GROWTH, passiveGatherersBought)
    );
    const passiveClicksPerSecond = passiveGatherersBought * PASSIVE_CLICKS_PER_GATHERER;

    useEffect(() => {
        if (passiveClicksPerSecond === 0) {
            return undefined;
        }

        const intervalId = setInterval(() => {
            setClicks((prevClicks) => prevClicks + passiveClicksPerSecond);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [passiveClicksPerSecond]);

    const handleClick = () => {
        setClicks((prevClicks) => prevClicks + clicksPerClick);
    };

    const handleBuyClickPowerUpgrade = () => {
        if (clicks < clickPowerUpgradeCost) {
            return;
        }

        setClicks((prevClicks) => prevClicks - clickPowerUpgradeCost);
        setClicksPerClick((prevClicksPerClick) => prevClicksPerClick + 1);
        setClickPowerUpgradesBought((prevUpgradesBought) => prevUpgradesBought + 1);
    };

    const handleBuyPassiveGatherer = () => {
        if (clicks < passiveGathererCost) {
            return;
        }

        setClicks((prevClicks) => prevClicks - passiveGathererCost);
        setPassiveGatherersBought((prevPassiveGatherers) => prevPassiveGatherers + 1);
    };

    return (
        <div className="clicker-layout">
            <section className="clicker-panel" aria-label="Clicker panel">
                <h3>Clicker</h3>
                <p>Total clicks: {clicks}</p>
                <p>Clicks per click: {clicksPerClick}</p>
                <p>Passive clicks/second: {passiveClicksPerSecond}</p>
                <button type="button" onClick={handleClick}>
                    Click (+{clicksPerClick})
                </button>
            </section>

            <ClickerItems
                clicks={clicks}
                clicksPerClick={clicksPerClick}
                clickPowerUpgradeCost={clickPowerUpgradeCost}
                onBuyClickPowerUpgrade={handleBuyClickPowerUpgrade}
                passiveGatherers={passiveGatherersBought}
                passiveGathererCost={passiveGathererCost}
                passiveClicksPerSecond={passiveClicksPerSecond}
                onBuyPassiveGatherer={handleBuyPassiveGatherer}
            />
        </div>
    );
}

export default Clicker;