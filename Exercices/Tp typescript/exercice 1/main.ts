import { Point } from "./point";
import { TroisPoints} from "./TroisPoints";

var p1 : Point =new Point(1,2);
var p2 : Point =new Point(3,2);
var p3 : Point =new Point(1,3);

var triplet : TroisPoints =new TroisPoints(p1,p2,p3);

var x : any;

x=p1.calculerDistance(p2);
console.log(x);
x=p1.calculerMilieu(p2);
console.log(x);
x=triplet.TesterAlignement();
console.log(x);
x=triplet.estIsocele();

