package controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import weka.classifiers.Evaluation;
import weka.classifiers.bayes.NaiveBayes;
import weka.core.Instances;

import java.io.BufferedReader;
import java.io.FileReader;

@Controller
public class MainController {
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("msg", "Hello World Spring");
		return "home_demo";
	}

	static String NaiveBayesModelPath = "D:/NaiveBayes.model";
	int classIndex;

	@GetMapping("/weka")
	public String weka(Model model) throws Exception {

		BufferedReader breader = null;
		breader = new BufferedReader(new FileReader("D:/training.arff"));
		Instances trainingSet = new Instances(breader);

		classIndex = trainingSet.numAttributes() - 1;
		trainingSet.setClassIndex(classIndex);

		breader.close();

		int trainSetSize = Math.round((trainingSet.numInstances() * 90) / 100);
		int testSetSize = trainingSet.numInstances() - trainSetSize;

		trainingSet.randomize(new java.util.Random(1));
		Instances train = new Instances(trainingSet, 0, trainSetSize);
		Instances test = new Instances(trainingSet, trainSetSize, testSetSize);

		NaiveBayes cls = new NaiveBayes();
		//SimpleLogistic cls = new SimpleLogistic();

		cls.buildClassifier(train);
		Evaluation eval = new Evaluation(train);
		eval.evaluateModel(cls, test);
		// eval.crossValidateModel(tree, newData, 10, new Random(1));

		System.out.println(eval.toSummaryString());

		// clf.buildClassifier(train);
		// Evaluation trainEval = new Evaluation(train);
		// trainEval.evaluateModel(clf, train);
		//
		// System.out.println("Weka Train Evaluation:");
		// System.out.println(trainEval.toSummaryString());
		//
		//
		// if (!trainingSet.classAttribute().isNumeric()) {
		// System.out.println(trainEval.toMatrixString());
		// }
		//
		// Evaluation testEval = new Evaluation(train);
		//
		// System.out.println("Weka Test Evaluation:");
		// testEval.evaluateModel(clf, test);
		// System.out.println(testEval.toSummaryString());
		// if (!trainingSet.classAttribute().isNumeric()) {
		// System.out.println(testEval.toMatrixString());
		// }

		//
		// train.setClassIndex(train.numAttributes()-1);
		// test.setClassIndex(test.numAttributes()-1);
		//
		// String[] options = weka.core.Utils.splitOptions("");
		//
		// NaiveBayes nB = new NaiveBayes();
		// nB.setOptions(options);
		// nB.buildClassifier(train);
		//// NaiveBayes nB = new NaiveBayes();
		//
		// Evaluation eval = new Evaluation(train);
		//
		// eval.evaluateModel(nB, test);

		// System.out.println("training performance results of: " +
		// nB.getClass().getSimpleName()
		// + "\n---------------------------------");
		// System.out.println(eval.toSummaryString("\nResults",true));
		// System.out.println("fmeasure: " +eval.fMeasure(1) + " Precision: " +
		// eval.precision(1)+ " Recall: "+ eval.recall(1));
		// System.out.println(eval.toMatrixString());
		// System.out.println(eval.toClassDetailsString());
		// System.out.println("AUC = " +eval.areaUnderROC(1));
		// System.out.println("Training complete, please validate trained
		// model");

		weka.core.SerializationHelper.write(NaiveBayesModelPath, cls);

		return "home_demo";
	}
}
