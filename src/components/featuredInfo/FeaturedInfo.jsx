import "./featuredInfo.css";
import { 
    ArrowDownward, ArrowUpward,
 } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitile">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM 2,783</span>
                    <span className="featuredMoneyRate">
                        -10.3 <ArrowDownward className="featuredIcon negative"/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitile">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM 3,783</span>
                    <span className="featuredMoneyRate">
                        -1.3 <ArrowDownward className="featuredIcon negative"/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitile">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">RM 2,003</span>
                    <span className="featuredMoneyRate">
                        -1.3 <ArrowUpward className="featuredIcon"/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div> 
    )
}
