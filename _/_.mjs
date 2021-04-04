import map from "./map.mjs";
import filter from "./filter.mjs";
import find from "./find.mjs";
import findIndex from "./findIndex.mjs";
import identity from "./identity.mjs";
import some from "./some.mjs";
import every from "./every.mjs";

var _ = {};

_.map = map;
_.findIndex = findIndex;
_.filter = filter;
_.find = find;
_.identity = identity;
_.every = every;
_.some = some;

export default _;
