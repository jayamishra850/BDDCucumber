package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\prctice of java\\Selenium\\FreeCRMBDDFramework\\src\\main\\java\\Features\\loginMap.feature",
		glue= {"stepDefinitions"},
		format= {"pretty","html:test-output"},
		dryRun= false,
		monochrome= false,
		strict= false
		)
public class TestRunner {

}
