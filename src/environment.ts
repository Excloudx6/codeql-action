export enum EnvVar {
  /** Set to true when the `analyze` Action completes successfully. */
  ANALYZE_DID_COMPLETE_SUCCESSFULLY = "CODEQL_ACTION_ANALYZE_DID_COMPLETE_SUCCESSFULLY",

  /** Set to "true" when the CodeQL Action has invoked the Go autobuilder. */
  DID_AUTOBUILD_GOLANG = "CODEQL_ACTION_DID_AUTOBUILD_GOLANG",

  /**
   * Used to disable the SARIF post-processing in the Action that removes duplicate locations from
   * notifications in the `run[].invocations[].toolExecutionNotifications` SARIF property.
   */
  DISABLE_DUPLICATE_LOCATION_FIX = "CODEQL_ACTION_DISABLE_DUPLICATE_LOCATION_FIX",

  /**
   * If set to the "true" string, then the CodeQL Action is using its
   * own deprecated and non-standard way of scanning for multiple
   * languages.
   */
  FEATURE_MULTI_LANGUAGE = "CODEQL_ACTION_FEATURE_MULTI_LANGUAGE",

  /**
   * If set to the "true" string, then the CodeQL Action is using its
   * own sandwiched workflow mechanism.
   */
  FEATURE_SANDWICH = "CODEQL_ACTION_FEATURE_SANDWICH",

  /**
   * If set to a truthy value, then the CodeQL Action might combine SARIF
   * output from several `interpret-results` runs for the same language.
   */
  FEATURE_SARIF_COMBINE = "CODEQL_ACTION_FEATURE_SARIF_COMBINE",

  /**
   * If set to the "true" string, then the CodeQL Action will upload SARIF,
   * not the CLI.
   */
  FEATURE_WILL_UPLOAD = "CODEQL_ACTION_FEATURE_WILL_UPLOAD",

  /** UUID representing the current job run. */
  JOB_RUN_UUID = "JOB_RUN_UUID",

  ODASA_TRACER_CONFIGURATION = "ODASA_TRACER_CONFIGURATION",

  /** Whether to suppress the warning if the current CLI will soon be unsupported. */
  SUPPRESS_DEPRECATED_SOON_WARNING = "CODEQL_ACTION_SUPPRESS_DEPRECATED_SOON_WARNING",

  /** Used to disable uploading SARIF results or status reports to the GitHub API */
  TEST_MODE = "CODEQL_ACTION_TEST_MODE",

  TESTING_ENVIRONMENT = "CODEQL_ACTION_TESTING_ENVIRONMENT",

  /** Semver of the CodeQL Action as specified in `package.json`. */
  VERSION = "CODEQL_ACTION_VERSION",

  /**
   * The time at which the first action (normally init) started executing.
   * If a workflow invokes a different action without first invoking the init
   * action (i.e. the upload action is being used by a third-party integrator)
   * then this variable will be assigned the start time of the action invoked
   * rather that the init action.
   */
  WORKFLOW_STARTED_AT = "CODEQL_WORKFLOW_STARTED_AT",
}
