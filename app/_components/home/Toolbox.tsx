import { TOOL_GROUPS } from "@/data/tools";
import styles from "./Toolbox.module.css";

export default function Toolbox() {
  return (
    <dl className={styles.toolbox}>
      {TOOL_GROUPS.map((toolGroup) => (
        <div key={toolGroup.label} className={styles.toolRow}>
          <dt className={styles.toolLabel}>{toolGroup.label}</dt>
          <dd>
            <ul className={styles.chips}>
              {toolGroup.items.map((tool) => (
                <li key={tool.name} className={styles.chip}>
                  {tool.icon && (
                    <tool.icon className={styles.chipIcon} aria-hidden="true" />
                  )}
                  {tool.name}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
