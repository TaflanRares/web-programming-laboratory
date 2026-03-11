function ClickerItems({
    clicks,
    clicksPerClick,
    clickPowerUpgradeCost,
    onBuyClickPowerUpgrade,
    passiveGatherers,
    passiveGathererCost,
    passiveClicksPerSecond,
    onBuyPassiveGatherer,
}) {
    const canBuyClickPowerUpgrade = clicks >= clickPowerUpgradeCost;
    const missingClicksForClickPower = Math.max(clickPowerUpgradeCost - clicks, 0);

    const canBuyPassiveGatherer = clicks >= passiveGathererCost;
    const missingClicksForPassive = Math.max(passiveGathererCost - clicks, 0);

    return (
        <section className="clicker-items-panel" aria-label="Clicker upgrades">
            <h4>Clicker Items</h4>
            <p>Spend clicks to click further.</p>

            <div className="clicker-item-card">
                <h5>Better Clicker</h5>
                <p>Effect: +1 click per click</p>
                <p>
                    Current power: {clicksPerClick} click{clicksPerClick === 1 ? '' : 's'} per click
                </p>
                <button
                    type="button"
                    onClick={onBuyClickPowerUpgrade}
                    disabled={!canBuyClickPowerUpgrade}
                >
                    Buy Better Clicker - Cost: {clickPowerUpgradeCost}
                </button>
                {!canBuyClickPowerUpgrade && (
                    <p>
                        Need {missingClicksForClickPower} more click
                        {missingClicksForClickPower === 1 ? '' : 's'} for this upgrade.
                    </p>
                )}
            </div>

            <div className="clicker-item-card">
                <h5>Rareș</h5>
                <p>Effect: +1 click per second</p>
                <p>
                    Owned: {passiveGatherers} | Passive rate: {passiveClicksPerSecond}/second
                </p>
                <button
                    type="button"
                    onClick={onBuyPassiveGatherer}
                    disabled={!canBuyPassiveGatherer}
                >
                    Buy Rareș to Click - Cost: {passiveGathererCost}
                </button>
                {!canBuyPassiveGatherer && (
                    <p>
                        Need {missingClicksForPassive} more click
                        {missingClicksForPassive === 1 ? '' : 's'} for this upgrade.
                    </p>
                )}
            </div>
        </section>
    );
}

export default ClickerItems;