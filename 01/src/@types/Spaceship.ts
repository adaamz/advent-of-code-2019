import {Mass} from "./Mass";

export type Spaceship = {
    modules: Iterable<SpaceshipModule>;
};

export type SpaceshipModule = {
    mass: Mass;
};
