import map from "./map.mjs";
import filter from "./filter.mjs";
import find from "./find.mjs";
import findIndex from "./findIndex.mjs";
import identity from "./identity.mjs";
import some from "./some.mjs";
import every from "./every.mjs";
import not from "./not.mjs";
import beq from "./beq.mjs";
import positive from "./positive.mjs";
import negativeIndex from "./negativeIndex.mjs";

var _ = {};

_.map = map;
_.findIndex = findIndex;
_.filter = filter;
_.find = find;
_.identity = identity;
_.every = every;
_.some = some;
_.not = not;
_.beq = beq;
_.positive = positive;
_.negativeIndex = negativeIndex;

export default _;
