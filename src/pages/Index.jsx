// 完整的 Index 页面组件
import { Box, Input, Button, Text, Checkbox, CheckboxGroup, Stack, Heading, Flex, Editable, EditableInput, EditablePreview, IconButton, useEditableControls, Tooltip, Divider } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaSave, FaCheck, FaTimes } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      {/* 数据输入界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          数据输入界面
        </Heading>
        <Input placeholder="输入待标注的文本数据" mb={3} />
        <CheckboxGroup colorScheme="green">
          <Stack spacing={2} direction="column">
            <Checkbox>去除停用词</Checkbox>
            <Checkbox>词干提取</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Button mt={4} leftIcon={<FaPlus />}>
          提交文本
        </Button>
      </Box>

      {/* 类别标签管理界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          类别标签管理界面
        </Heading>
        <Flex justify="space-between" align="center" mb={2}>
          <Text>类别一</Text>
          <Box>
            <IconButton icon={<FaEdit />} mr={2} aria-label="Edit" />
            <IconButton icon={<FaTrash />} aria-label="Delete" />
          </Box>
        </Flex>
        <Button leftIcon={<FaPlus />}>添加新标签</Button>
      </Box>

      {/* 相关度判断界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          相关度判断界面
        </Heading>
        <Text mb={2}>文本与类别标签的相关度得分：</Text>
        <Text>类别一：0.85</Text>
        <Text>类别二：0.60</Text>
      </Box>

      {/* 单一类别文本分类界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          单一类别文本分类界面
        </Heading>
        <Text mb={2}>文本被分类到的类别标签：</Text>
        <Text>类别一</Text>
      </Box>

      {/* 多标签划分界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          多标签划分界面
        </Heading>
        <Text mb={2}>选择多个标签：</Text>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={2} direction="column">
            <Checkbox>类别一</Checkbox>
            <Checkbox>类别二</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Button mt={4} leftIcon={<FaCheck />}>
          确认选择
        </Button>
      </Box>

      {/* 标签标注管理界面 */}
      <Box mb={10}>
        <Heading size="lg" mb={4}>
          标签标注管理界面
        </Heading>
        <Editable defaultValue="已标注文本示例" mb={2}>
          <EditablePreview />
          <EditableInput />
          <Flex justify="center">
            <Tooltip label="Save" fontSize="md">
              <IconButton icon={<FaSave />} aria-label="Save" m={1} />
            </Tooltip>
            <Tooltip label="Edit" fontSize="md">
              <IconButton icon={<FaEdit />} aria-label="Edit" m={1} />
            </Tooltip>
            <Tooltip label="Delete" fontSize="md">
              <IconButton icon={<FaTrash />} aria-label="Delete" m={1} />
            </Tooltip>
          </Flex>
        </Editable>
        <Button leftIcon={<FaPlus />}>添加新的标注</Button>
      </Box>
    </Box>
  );
};

export default Index;
