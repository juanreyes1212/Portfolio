import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "1.2M+", label: "Monthly Users" },
  { value: "40%", label: "Dev Time Reduced" },
  { value: "15+", label: "Enterprise Projects" },
];

const StatsBar = () => {
  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:border-r last:border-r-0 border-border/30"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
