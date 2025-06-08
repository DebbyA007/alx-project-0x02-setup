// alx-project-0x02/components/common/Card.tsx

import { CardProps } from '../../interfaces';

/**
 * A reusable card component.
 * @param title   — heading text
 * @param content — body text
 */
export default function Card({ title, content }: CardProps) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
