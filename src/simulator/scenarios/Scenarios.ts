import { InGameEvent } from '../in-game-events/InGameEvents';
import { CapabilityImprovements, ContainmentPolicy } from '../player-actions/PlayerActions';
import { PlayerActions } from '../SimulatorState';
import { VictoryCondition } from '../victory-conditions/VictoryConditon';
/**
 * Represents the initial state of the game world.
 */
export interface Scenario {
    totalPopulation: number;
    initialNumInfected: number;
    importedCasesPerDay: number;
    r0: number;
    hospitalCapacity: number;
    gdpPerDay: number;
    power: number;
    distr_family: string;
    dynamics: string;
    mortality: number; // A number between 0 and 1 representing the mortality
    time_lumping: boolean;
    initialContainmentPolicies: ContainmentPolicy[];
    initialCapabilityImprovements: CapabilityImprovements[];
    initialInGameEvents: InGameEvent[];
    victoryConditions: VictoryCondition[];
}
