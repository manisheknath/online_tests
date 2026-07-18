/* ============================================================
   QUESTIONS FILE
   Core Java, Spring Boot & Jenkins Assessment
   Sections: Core Java · Spring Boot · Jenkins/CI-CD · Practical
   Total: 66 Points across 30 questions
   ============================================================ */

const TEST_CONFIG = {

  testCode: "TECH-JAVA-001",

  title: "Core Java, Spring Boot & Jenkins Assessment",

  intro: "This test covers Core Java fundamentals, Spring Boot, Jenkins/CI-CD, and two practical scenario questions. Read each question carefully and complete all 30 before submitting.",

  timeLimitMinutes: 60,

  // Set these before this test goes out — see the format guide.
  startDate: "2026-07-19T15:00:00",
  deadline: "2026-07-19T16:00:00",

  // No reading passages here, so unlike the language tests, it's
  // safe to turn shuffleQuestions on for this one if you want to —
  // no question depends on content from another.
  shuffleQuestions: false,
  shuffleOptions: false,

  questions: [

    // =========================
    // CORE JAVA (24 points)
    // =========================

    {
      type: "mc",
      prompt: "Which of these is NOT a core principle of Object-Oriented Programming?",
      points: 2,
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
      correctIndex: 3
    },

    {
      type: "mc",
      prompt:
`What does this print?

String a = "hello";
String b = "hello";
System.out.println(a == b);`,
      points: 2,
      options: ["true", "false", "Compilation error", "Runtime exception"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which keyword prevents a class from being subclassed?",
      points: 2,
      options: ["static", "final", "private", "abstract"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Which of the following is a checked exception?",
      points: 2,
      options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException"],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "Which of these Java collections does not allow duplicate elements?",
      points: 2,
      options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "What does the \"static\" keyword mean when applied to a method?",
      points: 2,
      options: [
        "The method belongs to each individual instance",
        "The method belongs to the class rather than any single instance",
        "The method cannot be overridden",
        "The method can only run once per program"
      ],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Since Java 8, which of these can contain a method with a default implementation using the \"default\" keyword?",
      points: 2,
      options: ["Interface", "Enum", "Annotation", "Record"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "What is the correct way to design an immutable class in Java?",
      points: 2,
      options: [
        "Make all fields private and final, and don't provide setter methods",
        "Make all fields public",
        "Use only static fields",
        "Extend the Object class directly"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt:
`Which Java feature enables this code?

list.stream().filter(x -> x > 5).collect(Collectors.toList());`,
      points: 2,
      options: ["The Streams API (Java 8+)", "The Reflection API", "Serialization", "JDBC"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which of these classes is thread-safe by default (its methods are synchronized)?",
      points: 2,
      options: ["ArrayList", "HashMap", "StringBuilder", "Vector"],
      correctIndex: 3
    },

    {
      type: "short",
      prompt: "What is the difference between \"==\" and \".equals()\" when comparing two String objects in Java?",
      points: 2,
      answer: "\"==\" compares object references (whether both variables point to the same memory location), while .equals() compares the actual content/characters of the strings."
    },

    {
      type: "short",
      prompt: "Give at least one key difference between an abstract class and an interface in Java.",
      points: 2,
      answer: "An abstract class can have constructors, instance variables, and a mix of abstract and concrete methods, and a class can only extend one abstract class. An interface traditionally only declares method signatures (though it can have default/static methods since Java 8), and a class can implement multiple interfaces."
    },

    // =========================
    // SPRING BOOT (20 points)
    // =========================

    {
      type: "mc",
      prompt: "Which annotation is used to mark the main class of a Spring Boot application?",
      points: 2,
      options: ["@SpringBootApplication", "@Component", "@Service", "@Configuration"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which annotation is most commonly used for dependency injection in Spring?",
      points: 2,
      options: ["@Autowired", "@Override", "@Entity", "@RequestParam"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "How does @RestController differ from @Controller?",
      points: 2,
      options: [
        "@RestController combines @Controller and @ResponseBody, returning data directly as JSON/XML instead of a view name",
        "@RestController is used only for database access",
        "@RestController disables all endpoints by default",
        "@RestController is a deprecated annotation"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which file is commonly used to configure a Spring Boot application's settings (server port, database URL, etc.)?",
      points: 2,
      options: ["pom.xml", "application.properties", "web.xml", "build.gradle"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "By default, how does Spring Boot run a web application without deploying to an external server?",
      points: 2,
      options: [
        "It uses an embedded servlet container, such as Tomcat",
        "It requires a separate web server installation",
        "It always runs inside Docker",
        "It requires a load balancer"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which starter dependency would you add to quickly build a Spring Boot REST API?",
      points: 2,
      options: ["spring-boot-starter-web", "spring-boot-starter-test", "spring-boot-starter-security", "spring-boot-starter-actuator"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which annotation marks a class as a JPA entity mapped to a database table?",
      points: 2,
      options: ["@Entity", "@Table", "@Column", "@Repository"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which Spring Boot feature exposes monitoring endpoints such as /actuator/health and /actuator/metrics?",
      points: 2,
      options: ["Spring Security", "Spring Boot Actuator", "Spring Data", "Spring Cloud"],
      correctIndex: 1
    },

    {
      type: "short",
      prompt: "What is the purpose of the @Autowired annotation in Spring?",
      points: 2,
      answer: "It tells Spring to automatically resolve and inject a required dependency (bean) into a class, rather than the developer manually creating and wiring the object."
    },

    {
      type: "short",
      prompt: "What is the purpose of application.properties or application.yml in a Spring Boot project?",
      points: 2,
      answer: "They externalize application configuration (such as server port, database connection details, and custom settings) so it can be changed without modifying the Java code."
    },

    // =========================
    // JENKINS / CI-CD (12 points)
    // =========================

    {
      type: "mc",
      prompt: "What is a Jenkinsfile?",
      points: 2,
      options: [
        "A configuration file that defines a Jenkins pipeline as code",
        "A log file generated after each build",
        "A plugin installed in Jenkins",
        "A type of Jenkins user account"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Which two pipeline syntaxes does Jenkins support?",
      points: 2,
      options: ["Declarative and Scripted", "Static and Dynamic", "Manual and Automatic", "Local and Remote"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "What commonly triggers a Jenkins build automatically when code is pushed to a repository?",
      points: 2,
      options: ["Only a manual build button click", "A webhook or SCM polling", "Restarting the Jenkins server", "Deleting the job"],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "In a Jenkins declarative pipeline, which block defines the sequence of steps like \"Build\", \"Test\", and \"Deploy\"?",
      points: 2,
      options: ["stages", "environment", "tools", "agent"],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "What is the purpose of the \"agent\" directive in a Jenkins pipeline?",
      points: 2,
      options: [
        "It specifies where (which node/executor/container) the pipeline or stage will run",
        "It defines environment variables only",
        "It sends email notifications",
        "It deletes old build history"
      ],
      correctIndex: 0
    },

    {
      type: "short",
      prompt: "What is the main benefit of defining a Jenkins pipeline as code (a Jenkinsfile) rather than configuring it manually through the UI?",
      points: 2,
      answer: "It allows the pipeline to be version-controlled, code-reviewed, reused across projects, and reliably reproduced — unlike manual UI configuration, which is harder to track, audit, or replicate consistently."
    },

    // =========================
    // PRACTICAL / SCENARIO (10 points)
    // =========================

    {
      type: "short",
      prompt: "Write the Java code (annotations, class, and method signature) for a Spring Boot REST endpoint that returns a list of users as JSON on a GET request to /api/users.",
      points: 5,
      answer:
`Open answer — expect something close to:

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}

Look for: @RestController (or @Controller + @ResponseBody), a mapping to /api/users via @GetMapping or @RequestMapping(method = GET), and a return type that would serialize to a JSON array.`
    },

    {
      type: "short",
      prompt: "A Jenkins pipeline build fails at the \"Test\" stage but the tests pass fine locally. Describe two possible reasons for this discrepancy and how you would start investigating.",
      points: 5,
      answer: "Open answer — look for reasonable causes such as: (1) environment differences (different JDK/dependency versions, missing environment variables, different OS on the Jenkins agent vs. local machine), and (2) test/data dependencies (tests relying on local files, a local database, or network access unavailable on the Jenkins agent). Investigation should start with checking the Jenkins console output for the exact failure and comparing the agent's environment/configuration against the local setup."
    }

  ]
};
