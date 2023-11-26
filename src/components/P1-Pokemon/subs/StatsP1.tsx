import React from "react";
import { Stat, Species } from "../../../types/PokeTypes";
import { useState, useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";
type Props = {
  stats?: Stat[];
};

const StatsP1: React.FC<Props> = ({ stats }) => {
  const [powerLevel, setPowerLevel] = useState<number>(0);
  const defaultStat: number = 0;
  useEffect(() => {
    if (stats) {
      const power: number = stats.reduce((x, y) => {
        return y.base_stat ? x + y.base_stat : 0;
      }, 0);
      stats && console.log("STATS", stats);
      stats && setPowerLevel(Math.round(power / stats.length));
    }
  }, [stats]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Container style={{ border: "1px solid gray", borderRadius: "10px" }}>
          {stats &&
            stats.map((stat: Stat, index) => (
              <h6>
                {stat.stat?.name?.toUpperCase()}
                {
                  <ProgressBar
                    variant="success"
                    className="w-50"
                    now={stat.base_stat ? (stat.base_stat / 255) * 100 : 0}
                  />
                }
              </h6>
            ))}
          {stats && (
            <small>
              POWERSCORE {powerLevel}
              <ProgressBar
                animated
                variant="warning"
                className="w-25"
                now={(powerLevel / 150) * 100}
              />
            </small>
          )}
        </Container>
      </div>
    </>
  );
};

export default StatsP1;
