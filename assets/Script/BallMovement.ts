import GameManager from "./GameManager";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BallMovement extends cc.Component {

    rigidbody: cc.RigidBody;
    col: cc.PhysicsCircleCollider;

    onLoad() {

        this.rigidbody = this.node.getComponent(cc.RigidBody);
    }


    start() {
        this.rigidbody.linearVelocity = cc.Vec2.ZERO;

    }

    update(dt) {

        let x = GameManager.instance.touchCurrentPos.x - GameManager.instance.touchPreviousPos.x;
        // console.log(this.touchCurrentPos.x, "---", this.touchPreviousPos.x)
        if (x != 0) {
            if (Math.abs(x) < 1)
                x = 0;
            this.rigidbody.linearVelocity = cc.v2(x * 100, GameManager.instance.speed);
            GameManager.instance.touchPreviousPos = GameManager.instance.touchCurrentPos;
        }
        else {
            this.rigidbody.linearVelocity = cc.v2(0, GameManager.instance.speed);
        }

    }

}
